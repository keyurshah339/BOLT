function showFloatingNotification(id){
    const notification = document.getElementById(id);
    if(notification.style.display === "none"){
        notification.style.display = "flex";
        const timer = setTimeout(() => notification.style.display = "none",3000);
        timer();
        clearTimeout(timer)
    }
    notification.style.display = "none"
}