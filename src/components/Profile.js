import React from 'react'

class Profile extends React.Component {


    render() {
        const {Person,handleToggle}=this.props;
        const profileItem= Person.isVisible?(
            <div>
                <img src={Person.img} alt=""/>
                <p>{Person.FullName}</p>
                <h5> Bio</h5>
                <p>{Person.Bio}</p>

                <p>{Person.profession}</p>
                <button onClick={()=>{handleToggle()}}>Hide</button>
            </div>)
                    :(
                   <div>
                       <h4>Profile is not visible</h4>
                       <button onClick={()=>{handleToggle()}}>Show</button>
                   </div>

                    );

        return(
            <div className="container">
                <h1>Pofile</h1>
               <div className="">
                   {profileItem}
               </div>

             </div>
        )
    }

}
export default Profile
