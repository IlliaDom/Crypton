export const shortenAddress = (address, count) => `${address.slice(0, count)}...${address.slice(address.length - 5)}`;