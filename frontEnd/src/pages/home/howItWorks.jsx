import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {
    const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">How ServiceSwap Works</h1>

      <div className="mb-5">
        <h2>1. Offer what you love to do</h2>
        <p>
          You can offer your services to our platform — things you're
          great at or passionate about! Anything from web design, tutoring, hadnyworks,
          wellness, art, or advice.
        </p>
      </div>

      <div className="mb-5">
        <h2>2. Earn Time credits or do direct trades</h2>
        <p>
          When someone hires you, you can choose to be paid in Time Credits or
          swap services directly. Time credits are earned by helping others,
          and you can use them to get services from anyone in the network.
        </p>
      </div>

      <div className="mb-5">
        <h2>3. Get what you need from others</h2>
        <p>
          Use your Time credits to request services that others offer. Search
          the directory, message members, and request services that meet your
          needs — no cash required!
        </p>
      </div>

      <div className="mb-5">
        <h2>4. Build trust with reviews</h2>
        <p>
          After every service exchange, leave a review and get one in return.
          These build your reputation and help others trust you.
        </p>
      </div>

      <div className="mb-5">
        <h2>5. Repeat & grow your network</h2>
        <p>
          The more services you offer and use, the more you build your
          reputation and connections. It's a cycle of mutual help — for free!
        </p>
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-primary btn-lg" onClick={()=>navigate('/register')}>Join Now</button>
      </div>
    </div>
  );
};

export default HowItWorks;
