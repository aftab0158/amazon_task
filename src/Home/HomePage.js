import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getShipmentListAction } from "../Store/Action/getShipmentListAction";

export class HomePage extends Component {
  componentDidMount = () => {
    this.props.getShipmentListAction();
  };

  render() {
    let { getShipmentDetailsData } = this.props.getShipmentListReducer;
    console.log(this.props.getShipmentListReducer);
    console.log(this.props);

    return (
      <div className="container">
        <h3
          className="text-center my-4 py-2"
          style={{ backgroundColor: "#afb0b3" }}
        >
          Launch Details
        </h3>

        <div className="row">
          {getShipmentDetailsData === null ||
          getShipmentDetailsData === undefined ||
          getShipmentDetailsData.length < 1 ? (
            <h4 className="bg-white text-center py-40">
              No Complaint Shipment available
            </h4>
          ) : (
            getShipmentDetailsData.slice(0, 6).map((shipment, i) => {
              return (
                <div className="col-md-6">
                  <div
                    style={{ border: "1px solid gray", borderRadius: "10px" }}
                    className="mb-4 text-center"
                  >
                    <h5
                      className="text-left px-3 py-2 mb-0"
                      style={{
                        backgroundColor: "#cbccd1",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                    >
                      {shipment.title}{" "}
                    </h5>
                    <div
                      style={{
                        backgroundColor: "#e3e4e8",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                      }}
                    >
                      <h5 className="text-left px-3">
                        Launch Time: {shipment.event_date_utc}{" "}
                      </h5>
                      <p className=" mb-0 py-2 text-left px-3">
                        {shipment.details}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default withRouter(
  connect(mapStateToProps, { getShipmentListAction })(HomePage)
);
