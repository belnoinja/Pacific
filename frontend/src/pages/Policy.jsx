import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const PrivacyPolicy = () => {
  const { setSb } = useContext(ShopContext);

  useEffect(() => {
    setSb(false);
  }, []);

  return (
    <div className="my-10">
      <div className="text-2xl border-t pt-8 text-center">
        <Title text1={"PRIVACY"} text2={"POLICY"} />
      </div>

      <div className="my-10 flex flex-col gap-6 text-gray-600">
        <p>
          Welcome to our Privacy Policy page! This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or make a purchase. Your privacy is important to us, and we are committed to safeguarding your data.
        </p>

        <h2 className="text-xl font-bold">Information We Collect</h2>
        <p>
          We collect various types of information to provide better services to our users. This includes:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Name:</strong> Your full name to personalize your experience.</li>
          <li><strong>Email Address:</strong> For order confirmations, updates, and newsletters.</li>
          <li><strong>Shipping Address:</strong> To deliver your orders accurately and timely.</li>
          <li><strong>Payment Information:</strong> Details required to process transactions securely. This information is processed by a third-party payment processor.</li>
        </ul>

        <h2 className="text-xl font-bold">How We Use Your Information</h2>
        <p>
          The information we collect is used for various purposes, including:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Processing Your Orders:</strong> We use your information to fulfill and deliver your orders promptly.</li>
          <li><strong>Communication:</strong> To contact you regarding your orders, provide updates, and respond to your inquiries.</li>
          <li><strong>Customer Support:</strong> To assist you with any issues related to your orders or our services.</li>
          <li><strong>Service Improvement:</strong> To analyze usage patterns and improve our website and services based on your feedback.</li>
          <li><strong>Marketing:</strong> To send promotional materials, offers, and news about our products if you have opted in.</li>
        </ul>

        <h2 className="text-xl font-bold">Sharing Your Information</h2>
        <p>
          We value your privacy and do not sell your personal information to third parties. However, we may share your information with trusted partners to facilitate our services:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Payment Processors:</strong> To process your payments securely.</li>
          <li><strong>Shipping Companies:</strong> To deliver your orders efficiently.</li>
          <li><strong>Service Providers:</strong> Third-party vendors that assist us in operating our website and delivering our services.</li>
        </ul>
        <p>
          These partners are obligated to protect your information and use it only for the purposes for which we disclose it.
        </p>

        <h2 className="text-xl font-bold">Security of Your Information</h2>
        <p>
          We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.
        </p>

        <h2 className="text-xl font-bold">Your Rights</h2>
        <p>
          You have certain rights regarding your personal information, including:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Access:</strong> You can request to see the personal information we hold about you.</li>
          <li><strong>Correction:</strong> If you believe your information is inaccurate or incomplete, you can request corrections.</li>
          <li><strong>Deletion:</strong> You can request the deletion of your personal information under certain circumstances.</li>
          <li><strong>Opt-Out:</strong> You can unsubscribe from our marketing communications at any time by following the instructions in the emails.</li>
        </ul>

        <h2 className="text-xl font-bold">Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new Privacy Policy on our website and updating the effective date at the top of this page.
        </p>

        <h2 className="text-xl font-bold">Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy or our practices, please contact us at pacificbrandstore@gmail.com. We are here to help!
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
