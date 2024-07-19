export const formatTimeAgo = (dateString) =>{
    const now = new Date();
    const date = new Date(dateString);
    const secondsPast = (now.getTime() - date.getTime()) / 1000;

    if (secondsPast < 60) {
        return `${Math.floor(secondsPast)}s ago`;
    }
    if (secondsPast < 3600) {
        return `${Math.floor(secondsPast / 60)}m ago`;
    }
    if (secondsPast < 86400) {  // Исправлено условие на < 86400
        return `${Math.floor(secondsPast / 3600)}h ago`;
    }

    const daysPast = Math.floor(secondsPast / 86400);  // Приведение к числу
    return daysPast === 1 ? `${daysPast} day ago` : `${daysPast} days ago`;
}