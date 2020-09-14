import React from "react";
import * as axios from "axios";
import styles from "./Users.module.css";
import default_avatar from "../../../media/img/default_avatar.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";

class Users extends React.Component{


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.set_users(response.data.items)
            console.log(response.data.items)
        })
    }

    render() {
        return(
            <div>
                {this.props.users.map(user => (
                    <div className={styles.users_wrapper} key={user.id}>
                        <div className={styles.subwrapper_left}>
                            <img className={styles.photo} src={user.photos.small ? user.photos.small : default_avatar} alt='users icon'/>
                            {user.followed
                                ? <button className={styles.btn_user} onClick={() => {this.props.unfollowUser(user.id)}}>Unfollow</button>
                                : <button className={styles.btn_user} onClick={() => {this.props.followUser(user.id)}}>Follow</button>
                            }
                        </div>
                        <div className={styles.subwrapper_center}>
                            <h4 className={styles.name}>{user.name}</h4>
                            <p>{user.status}</p>
                        </div>
                        <div className={styles.subwrapper_right}>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faMapMarkedAlt}/>
                            </div>
                            <p>{'user.location.country'}</p>
                            <p>{'user.location.city'}</p>
                        </div>
                    </div>
                ))
                }
            </div>
        )

    }


}

export default Users
