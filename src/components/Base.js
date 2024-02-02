import CustomNavbar from "./CustomNavbar";

const Base=({title="Welcome to Our website",children })=>{
    return(
        <div  className="container-fluid p-0 m-0 "  >
            <CustomNavbar style={{ backgroundColor: "#e67300"}}/>
               {children }
            
        </div>
    );
};
export default Base;