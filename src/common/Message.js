import {toast} from "react-toastify";

export const contentMessage = {
    MESSAGE_ADD_SUCCESS: 'Create success!',
    MESSAGE_ADD_FAILED: 'Create failed! Please try again',
    MESSAGE_UPDATE_SUCCESS: 'Update success!',
    MESSAGE_UPDATE_FAILED: 'Update failed! Please try again',
    MESSAGE_DELETE_SUCCESS: 'Delete success!',
    MESSAGE_DELETE_FAILED: 'Delete failed! Please try again',
    MESSAGE_SUCCESS: 'Successful',
    MESSAGE_ERROR: 'Eror! Please try again',
    MESSAGE_WARNING: 'Please try again!',
    MESSAGE_LOGIN_FAILED: 'Username or password is incorrect',
    MESSAGE_PERMISSION_DENIED: 'You do not have permission to access',

    CONFIRM_DELETE_ACCOUNT: 'Are you sure you want to delete user account?',
    CONFIRM_DELETE_FREELANCER: 'Are you sure you want to delete freelancer?',
    CONFIRM_DELETE_JOB: 'Are you sure you want to delete job?',
    UNRECOVERABLE_DATA: 'Deleted data cannot be recovered',
}

export const notiMessage = (code = Number, messageContent = String, timeClose = 2500) => {
    switch (code) {
        // success
        case 200:
            messageContent = messageContent || contentMessage.MESSAGE_SUCCESS;
            toast.success(messageContent, {
                position: "top-right",
                autoClose: timeClose,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            break;
        // failed
        case 400:
            messageContent = messageContent || contentMessage.MESSAGE_ERROR;
            toast.error(messageContent, {
                position: "top-right",
                autoClose: timeClose,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            break;
        // warning
        case 300:
            messageContent = messageContent || contentMessage.MESSAGE_WARNING;
            toast.warning(messageContent, {
                position: "top-right",
                autoClose: timeClose,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            break;
        default:
            break;
    }
};
