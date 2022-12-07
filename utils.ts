export function getRelativeDate(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffInMinutes = diff / 1000 / 60;
  if (diffInMinutes < 1) {
    return "last minute";
  } else if (diffInMinutes < 5) {
    return "5min ago";
  } else if (diffInMinutes < 60) {
    return "1h ago";
  } else if (diffInMinutes < 60 * 24) {
    return "today";
  } else if (diffInMinutes < 60 * 24 * 2) {
    return "tomorrow";
  } else if (diffInMinutes < 60 * 24 * 3) {
    return "yesterday";
  } else {
    return date.toDateString();
  }
}

export function makeItDomain(subdomain: string) {
  // accept only alphanumeric characters and hyphens
  return subdomain.replace(/[^a-z0-9-]/gi, "").toLowerCase();
}



// create function that uploads images to server 
// and returns the url
export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "nextjs");
  return "https://laknabil.me/background.png"
}