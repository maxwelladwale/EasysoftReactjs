import React from 'react';

const UserForm = (props) => {
    return (
        <div style={{ marginTop:"", display:"block"}} >
            <h2 style={{ color:"white"}}> Easy Search </h2>
            <form onSubmit={props.getList}>
                <input type="text" name="usrid"></input>

                <button>Search</button>
            </form>

            
        </div>
    );
}

export default UserForm;