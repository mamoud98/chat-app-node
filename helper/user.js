var listUsers = [];

function getUsersRoom(room) {
  return listUsers.filter((a) => a.room == room);
}

function getUsersById(id) {
  var room = getUserRoomById(id);
  return listUsers.filter((a) => a.room == room);
}

function getUserRoomById(id) {
  var user = listUsers.filter((a) => a.id == id);
  return user.length > 0 ? user[0].room : "";
}

function getUserNameById(id) {
  var user = listUsers.filter((a) => a.id == id);
  return user.length > 0 ? user[0].username : "";
}

function changeId(username, id) {
  for (const user of listUsers) {
    if (user.username == username) {
         user.id = id;
    }
  }
}

function removeUser(id) {
  listUsers = listUsers.filter(u=> u.id != id);
}

module.exports = {
  listUsers,
  getUsersRoom,
  getUserNameById,
  changeId,
  removeUser,
  getUserRoomById,
  getUsersById
};
