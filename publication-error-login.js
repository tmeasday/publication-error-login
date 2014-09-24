if (Meteor.isClient) {
  Meteor.subscribe('pub');
}

if (Meteor.isServer) {
  Meteor.publish('pub', function() {
    if (! this.userId)
      return this.error("Need to login");
    
    console.log('subscription worked');
    return this.ready()
  })
}
