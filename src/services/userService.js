export function getUserInfos(userId) {
  return fetch(`http://localhost:3001/user/${userId}`).then((res) => {
    return res.json();
  });
}

export function getUserActivity(userId) {
  return fetch(`http://localhost:3001/user/${userId}/activity`).then((res) => {
    return res.json();
  });
}

export function getUserAverageSession(userId) {
  return fetch(`http://localhost:3001/user/${userId}/average-sessions`).then((res) => {
    return res.json();
  });
}

export function getUserPerformance(userId) {
  return fetch(`http://localhost:3001/user/${userId}/performance`).then((res) => {
    return res.json();
  });
}
