const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log(`Дозволити відкрити чат?`, canOpenChat);