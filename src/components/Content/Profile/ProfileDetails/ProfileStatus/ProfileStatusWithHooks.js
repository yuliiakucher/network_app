import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    
    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])

    const onInputChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    const activateEditState = () => {
        setEditMode(true)
    }
    const deactivateEditState = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

        return (
            <div>
                {editMode
                    ? <input
                        autoFocus={true}
                        onBlur={deactivateEditState}
                        value={status}
                        onChange={onInputChange}
                    />
                    : <div onDoubleClick={activateEditState}>{status || '--------'}</div>
                }
            </div>
        )
}

export default ProfileStatusWithHooks
