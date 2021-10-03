function UserToTableConverter(inputData) {
    function createData(
        user_id,
        user_email,
        user_displayName,
        user_isAdmin,
        user_isAuthorised,
        user_ProfileisVisible,
        user_createdEvents
    ) {
      return {
        user_id,
        user_email,
        user_displayName,
        user_isAdmin,
        user_isAuthorised,
        user_ProfileisVisible,
        user_createdEvents
      };
    }

    var rows = [];
    if(inputData){
        inputData.map((user) => {
          rows.push(
            createData(
              user._id,
              user.email,
              user.name,
              user.isAdmin.value,
              "true", //TODO user.authorised
              "true",//TODO user.visible
              1 //TODO events.filter(e => e.creator === user.id).toString
            )
          );
        });
      }
      console.log("output: ",rows);
      return rows;

}

export default UserToTableConverter;