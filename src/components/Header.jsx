import logo from "../assets/logo.png"
import moment from 'moment';

const Header = () => {
    
    
    return (
        <div className="flex flex-col justify-center items-center py-4 space-y-3">
            <img className="" src={logo} alt="" />
            <h3 className="text-gray-400">Journalism Without Fear or Favour</h3>
            <p>
                {
                    moment().format('dddd,MMMM Do YYYY')
                }
            </p>

            

            
        </div>
    );
};

export default Header;