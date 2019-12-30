import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Lê Trung Dương</h1>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});
export default connect(mapStateToProps)(Landing);
