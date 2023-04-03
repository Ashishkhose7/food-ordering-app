import React, { Component } from "react";
import Header from "../Header";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const orderApi = "https://restdataapi.onrender.com/vieworder";
// const updateOrder = "https://restdataapi.onrender.com/updateOrder";
class ViewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: "",
      update: 0
    };
  }

  refresh = () => {
    axios.get(orderApi).then((res) => {
      this.setState({ orders: res.data });
    });
  };

  renderBody = (ordersData) => {
    if (ordersData.length > 0) {
      return ordersData.map((data) => {
        return (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.hotel_name}</td>
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td>Rs.{data.cost}</td>
            <td>{data.date}</td>
            <td>{data.status}</td>
            <td>{data.bank_name}</td>
          </tr>
        );
      });
    } else {
      return (
        <>
          <center>
            <img
              src="https://www.epidomastegasis.gr/gov/Content/images/loaders/loader4.gif"
              alt="loading"
              className="loader"
              style={{
                position: "relative",
                left: "500px",
                padding: "0px"
              }}
            />
          </center>
        </>
      );
    }
  };
  render() {
    return (
      <>
        <Header />
        {/* <ToastContainer autoClose={2000} /> */}
        <div className="container mt-5">
          <center className="mb-4">
            <h4>My Orders</h4>
          </center>
          {/* <button onClick={this.refresh}>Refresh</button> */}
          <table className="table table-hover">
            <thead>
              <tr>
                <th>OrderId</th>
                <th>Restaurant name</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Cost</th>
                <th>Date</th>
                <th>Status</th>
                <th>BankName</th>
              </tr>
            </thead>
            <tbody>{this.renderBody(this.state.orders)}</tbody>
          </table>
        </div>
      </>
      // {/* <DisplayOrder orderData={this.state.orders} /> */}
    );
  }
  componentDidMount() {
    // const resolveAfter3Sec = new Promise((resolve) =>
    //   setTimeout(resolve, 3000)
    // );
    // toast.promise(
    //   resolveAfter3Sec,
    //   {
    //     pending: "Wait..Order is Getting Placed",
    //     success: "Order is Placed Successfully"
    //   },
    //   { autoClose: 2000 }
    // );

    // if (this.props.history) {
    //   let query = this.props.location.search.split("&");
    //   if (query) {
    //     let data = {
    //       status: query[0].split("=")[1],
    //       date: query[2].split("=")[1],
    //       bank_name: query[3].split("=")[1]
    //     };
    //     let id = query[1].split("=")[1].split("_")[1];
    //     fetch(`${updateOrder}/${id}`, {
    //       method: "PUT",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(data)
    //     });
    //   }
    // }
    setTimeout(() => {
      axios.get(orderApi).then((res) => {
        this.setState({ orders: res.data });
      });
    }, 3000);
  }
}
export default ViewOrder;
