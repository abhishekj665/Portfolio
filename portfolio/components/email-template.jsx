import * as React from "react";
import { profile_data } from "../project_data";

export const EmailTemplate = ({ messageData, name, email }) => (
  <section style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
    <section style={{ maxWidth: "600px", margin: "0 auto" }}>
      <section
        style={{
          background: "#fff",
          border: "1px solid #dedede",
          padding: "20px",
          textAlign: "left",
        }}
      >
        <p style={{ color: "#6c757d" }}>
          <strong>{name}</strong>
        </p>
        <p style={{ color: "#6c757d" }}>{messageData}</p>
        <h4 style={{ color: "#6c757d" }}>Email: {email}</h4>
      </section>
      <p style={{ textAlign: "center", color: "#6c757d" }}>
        Copyright 2026 {profile_data.name}. All rights reserved.
      </p>
    </section>
  </section>
);

export const EmailTemplate2 = ({ name }) => (
  <section style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
    <section style={{ maxWidth: "600px", margin: "0 auto" }}>
      <section
        style={{
          background: "#fff",
          border: "1px solid #dedede",
          padding: "20px",
          textAlign: "left",
        }}
      >
        <p style={{ color: "#6c757d" }}>
          {`Dear ${name},`}
          <br />
          <br />
          {`Thank you for reaching out. I received your message and will get back to you shortly.`}
          <br />
          <br />
          {`Best Regards,`}
          <br />
          {profile_data.name}
          <br />
        </p>
      </section>
      <p style={{ textAlign: "center", color: "#6c757d" }}>
        Copyright 2026 {profile_data.name}. All rights reserved.
      </p>
    </section>
  </section>
);
