import React from "react";
import styles from "./Users.module.css";
import default_avatar from "../../../media/img/default_avatar.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../../api/api";

const Users = (props) => {
    let pagesNumber = Math.ceil(props.totalPagesCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesNumber; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={styles.page_container}>
                {pages.map(page => {
                    return <div
                        key={page}
                        className={page !== props.currentPage ? styles.page : styles.page_selected}
                        onClick={() => props.changeCurrentPage(page)}
                    >{page}</div>
                })}
            </div>
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
