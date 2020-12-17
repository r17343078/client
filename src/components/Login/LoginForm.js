import React, {Component} from 'react';

class LoginForm extends Component {
        render(){
            return(
                <form>
                    <h1>Login</h1>
                    <div className="form-group">
                        <label className="control-label">Username</label>
    
                        <input
                            value={this.state.username}
                            onChange={this.onChange}
                            type="text"
                            name="username"
                            className="form-control"
                        />
                    </div>     
                </form>            
            )
        }
    
}

export default LoginForm;