import React from "react";
import styles from "./Users.module.css";
import default_avatar from "../../../media/img/default_avatar.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import Paginator from "../../Paginator/Paginator";


const Users = (props) => {
    return (
        <div>
            <Paginator totalPagesCount={props.totalPagesCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       changeCurrentPage={props.changeCurrentPage}/>
            {props.users.map(user => (
                <div className={styles.users_wrapper} key={user.id}>
                    <div className={styles.subwrapper_left}>
                        <NavLink to={`/profile/${user.id}`}>
                            <img className={styles.photo}
                                 src={user.photos.small ? user.photos.small : default_avatar} alt='users icon'/>
                        </NavLink>
                        {user.followed
                            ? <button className={styles.btn_user} onClick={() => {
                                props.unfollowUser(user.id)
                            }}>Unfollow</button>
                            : <button className={styles.btn_user} onClick={() => {
                                props.followUser(user.id)
                            }}>Follow</button>
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

export default Users
