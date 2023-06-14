import {Link} from 'react-router-dom'

const ErrorScreen = () => {
  const currentHref: string = window.location.href;

  return <div>
        <h1>{currentHref} Not Founds</h1>
        <Link to={"/"}>Go to HomePage</Link>
  </div>;
};

export default ErrorScreen;
