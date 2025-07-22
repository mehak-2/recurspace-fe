import React from "react";

export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 24 }}>
      <h1>Privacy Policy</h1>
      <p>
        <strong>What data we collect:</strong> We collect user account
        information (such as name, email, and password), usage data, and any
        data you provide while using our services.
      </p>
      <p>
        <strong>How we store, use, and share your data:</strong> Your data is
        stored securely in our databases. We use your data to provide and
        improve our services, personalize your experience, and communicate with
        you. We do not sell your data. We may share data with trusted
        third-party services for essential operations (such as authentication,
        analytics, or payment processing), always under strict confidentiality
        agreements.
      </p>
      <p>
        <strong>Contact information:</strong> If you have any questions or
        concerns about your privacy, please contact us at{" "}
        <a href="mailto:support@your-domain.com">support@your-domain.com</a>.
      </p>
      <p>
        This policy may be updated from time to time. Please review it
        periodically.
      </p>
    </div>
  );
}
