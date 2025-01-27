import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Appbar, Card, Button, Menu, Divider } from "react-native-paper";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const AdminPage = () => {
  const navigation = useNavigation();

  const [customers, setCustomers] = useState([]);
  const [globalStatus, setGlobalStatus] = useState("Active");
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/orders"); // Replace with your orders endpoint
        const orders = response.data;

        const customerMap = orders.reduce((acc, order) => {
          const { customerId, customerName, customerEmail } = order;
          if (!acc[customerId]) {
            acc[customerId] = {
              id: customerId,
              name: customerName,
              email: customerEmail,
              status: "Active",
              orders: [],
            };
          }
          acc[customerId].orders.push(order);
          return acc;
        }, {});

        setCustomers(Object.values(customerMap));
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };
    fetchOrders();
  }, []);

  const handleGlobalStatusToggle = (status) => {
    setGlobalStatus(status);
    setCustomers(customers.map((customer) => ({ ...customer, status })));
  };

  const handleCustomerStatusToggle = (id) => {
    setCustomers(
      customers.map((customer) =>
        customer.id === id
          ? { ...customer, status: customer.status === "Active" ? "Inactive" : "Active" }
          : customer
      )
    );
  };

  const handleExpandClick = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleOrderStatusChange = (customerId, trackingId, newStatus) => {
    setCustomers(
      customers.map((customer) =>
        customer.id === customerId
          ? {
              ...customer,
              orders: customer.orders.map((order) =>
                order.trackingId === trackingId
                  ? { ...order, status: newStatus }
                  : order
              ),
            }
          : customer
      )
    );
  };

  const renderCustomer = ({ item: customer }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.customerName}>{customer.name}</Text>
        <Text style={styles.customerEmail}>{customer.email}</Text>
        <Text style={styles.statusText}>
          Status: <Text style={customer.status === "Active" ? styles.active : styles.inactive}>{customer.status}</Text>
        </Text>
      </Card.Content>
      <Card.Actions>
        <Switch
          value={customer.status === "Active"}
          onValueChange={() => handleCustomerStatusToggle(customer.id)}
        />
        <Button onPress={() => handleExpandClick(customer.id)}>
          {expanded === customer.id ? "Hide Details" : "Show Details"}
        </Button>
      </Card.Actions>
      {expanded === customer.id && (
        <Card.Content>
          <Text style={styles.orderHeader}>Order History</Text>
          {customer.orders.map((order) => (
            <View key={order.trackingId} style={styles.orderRow}>
              <Text style={styles.orderText}>Tracking ID: {order.trackingId}</Text>
              <Text style={styles.orderText}>Item: {order.itemName}</Text>
              <Menu
                visible={false}
                onDismiss={() => {}}
                anchor={<Button>{order.status}</Button>}
              >
                <Menu.Item onPress={() => handleOrderStatusChange(customer.id, order.trackingId, "In Transit")} title="In Transit" />
                <Menu.Item onPress={() => handleOrderStatusChange(customer.id, order.trackingId, "Delivered")} title="Delivered" />
              </Menu>
            </View>
          ))}
        </Card.Content>
      )}
    </Card>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Admin Dashboard" />
        <Appbar.Action icon="logout" onPress={() => navigation.navigate("Login")} />
      </Appbar.Header>

      <View style={styles.globalControls}>
        <Text style={styles.headerText}>Manage Customers</Text>
        <View style={styles.buttonsRow}>
          <Button
            mode={globalStatus === "Active" ? "contained" : "outlined"}
            onPress={() => handleGlobalStatusToggle("Active")}
            style={styles.button}
          >
            Active
          </Button>
          <Button
            mode={globalStatus === "Inactive" ? "contained" : "outlined"}
            onPress={() => handleGlobalStatusToggle("Inactive")}
            style={styles.button}
          >
            Inactive
          </Button>
        </View>
      </View>

      <FlatList
        data={customers}
        renderItem={renderCustomer}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  globalControls: { padding: 16 },
  headerText: { fontSize: 20, marginBottom: 16 },
  buttonsRow: { flexDirection: "row", justifyContent: "space-between" },
  button: { marginHorizontal: 8 },
  listContainer: { paddingHorizontal: 16 },
  card: { marginBottom: 16 },
  customerName: { fontSize: 18, fontWeight: "bold" },
  customerEmail: { fontSize: 14, color: "gray" },
  statusText: { marginTop: 8 },
  active: { color: "green", fontWeight: "bold" },
  inactive: { color: "red", fontWeight: "bold" },
  orderHeader: { fontSize: 16, marginVertical: 8 },
  orderRow: { marginVertical: 4 },
  orderText: { fontSize: 14 },
});

export default AdminPage;
