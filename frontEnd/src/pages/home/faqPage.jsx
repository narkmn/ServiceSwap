const FaqPage = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Frequently Asked Questions</h1>

      <div className="accordion" id="faqAccordion">
        {/* FAQ 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="faq1">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse1"
              aria-expanded="true"
              aria-controls="collapse1"
            >
              What is Service Swap?
            </button>
          </h2>
          <div
            id="collapse1"
            className="accordion-collapse collapse show"
            aria-labelledby="faq1"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Service Swap is a platform where users can exchange services with one another instead of paying with money. It's a modern barter system powered by trust and community.
            </div>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="faq2">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse2"
              aria-expanded="false"
              aria-controls="collapse2"
            >
              How do I offer a service?
            </button>
          </h2>
          <div
            id="collapse2"
            className="accordion-collapse collapse"
            aria-labelledby="faq2"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Simply create an account, go to your dashboard, and add a new service with a description, category, and availability. Others can then request your service.
            </div>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="faq3">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse3"
              aria-expanded="false"
              aria-controls="collapse3"
            >
              Can I trade directly with another user?
            </button>
          </h2>
          <div
            id="collapse3"
            className="accordion-collapse collapse"
            aria-labelledby="faq3"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes! You can either trade services directly (e.g., tutoring for logo design) or use platform credits if you're not doing a direct exchange.
            </div>
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="faq4">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse4"
              aria-expanded="false"
              aria-controls="collapse4"
            >
              Is it free to use?
            </button>
          </h2>
          <div
            id="collapse4"
            className="accordion-collapse collapse"
            aria-labelledby="faq4"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes! The core functionality of Service Swap is completely free to use. There may be optional premium features or donation options in the future.
            </div>
          </div>
        </div>

        {/* FAQ 5 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="faq5">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse5"
              aria-expanded="false"
              aria-controls="collapse5"
            >
              How do I contact support?
            </button>
          </h2>
          <div
            id="collapse5"
            className="accordion-collapse collapse"
            aria-labelledby="faq5"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              You can reach out through our <a href="/contact">Contact Us</a> page. We typically respond within 24–48 hours.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
