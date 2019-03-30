/**
 *  A basic user management system using oop system
 *
 *  PLEASE ALL OPERATIONS ARE DONE ON CHROME/FIREFOX CONSOLE FOR FAST CHANGES AND EASY TRACKING
 *
 *  To use the code snippet
 *
 *  Open the script in browser tying it to an html index page
 *
 *  Open console then type in userKeeper to see the object create for userKeeper and all its methods
 *
 *  Now in other to perform operations on userKeeper
 *
 *  To create an account on userKeeper run the following method
 *
 *  userKeeper.createAccount(name, username, password)
 *
 *  Example <<<<<===>>>>>   userKeeper.createAccount("Abrahim", "solomon", "0qed9xd")
 *
 *  Now check your userDb, your newly create user is added to the database using
 *
 *  userDb
 *
 *  userDb would show <<<<<===>>>>> userDb[{ name: "Abrahim", userName: "solomon", password: "0qed9xd" }]
 *
 *  To update an exiting account on userKeeper run the following method
 *
 *  userKeeper.changeAccount(oldName, newName, userName, newPassword)
 *
 *  Example <<<<<===>>>>>   userKeeper.changeAccount("Abrahim", "Solomon David", "smonDman", "0892uequdb")
 *
 *  Now check your userDb, your changed user details is applied to the database
 *
 *  userDb
 *
 *  userDb would show <<<<<===>>>>> userDb[{ name: "Solomon David", userName: "smonDman", password: "0892uequdb" }]
 *
 *  To delete an exiting user account on userKeeper run the following method
 *
 *  userKeeper.deleteAccount(AccountName)
 *
 *  Example <<<<<===>>>>>   userKeeper.deleteAccount("Solomon David"")
 *
 *  Now check your userDb, your delete user would be off the database
 *
 *  userDb
 *
 *  userDb would show <<<<<===>>>>> userDb[]
 *
 *  Since we only added one user, for effective test, add 2-3 user,
 *
 *  doh demo users are created for safe test and quick feel
 *
 */

const userDb = [
  //Dommie user profiles in Db
  { name: "Emma Olivia", userName: "EmmaOlivia23", password: "0qed9823qd" },
  { name: "Jane Amelia", userName: "Amelia12", password: "0qed9xd" },
  { name: "Mia Joseph", userName: "josmia", password: "0qed98234dacxd" }
];

//Function Factory
function UserManager() {
  //Private Methods

  // Delete User Account
  const deleteAccountFromDb = user => {
    for (name in userDb) {
      if (userDb[name].name === user) {
        let removeUser = confirm(
          "are you sure you want to delete user from db"
        );
        if (removeUser == true) {
          alert(`${user} has been deleted from userDb`);
          userDb.splice(name, 1);
        } else `${user} hasnt been removed from userDB`;
        break;
      } else {
        alert(
          `Sorry please there is no user ${user} with such name in the data base`
        );
        break;
      }
    }
  };

  //Changing User Account on Db
  const accountDetail = (oldName, newName, userName, newPassword) => {
    for (user of userDb) {
      if (user.name === oldName) {
        const changeUser = confirm(
          `Please note ${oldName} would be changed with the details given on userDb`
        );
        if (changeUser == true) {
          user.name = newName;
          user.userName = userName;
          user.password = newPassword;
        }
        break;
      } else {
        alert(`there is no user ${oldName} with on userDb
                Please create a new account`);
      }
      return user;
    }
  };

  return {
    createAccount(name, username, password) {
      userDb.push({ name: name, userName: username, password: password });
    },
    changeAccount(oldName, newName, userName, newPassword) {
      accountDetail(oldName, newName, userName, newPassword);
    },
    deleteAccount(AccountName) {
      deleteAccountFromDb(AccountName);
    }
  };
}

const userKeeper = UserManager();
