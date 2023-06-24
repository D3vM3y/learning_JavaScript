const allClients = [];
const members = [];
const potentialMembers = [];

// creating simple member object
const client = {
    name: "Jack",
    age: 21,
    member: true,
}

// pushing data to the allClients array
allClients.push(client);
allClients.push({name: "Henry", age: 34, member: false});
allClients.push({name: "Sarah", age: 25, member: true});

// map
const isMember = allClients.map((memberDetail) => {
    return memberDetail.member === true && members.push(memberDetail);
})

const interestedClient = allClients.map((memberDetail) => {
    return memberDetail.member === false && potentialMembers.push(memberDetail);
})

// filter
const onlyMembers = allClients.filter((members) => {
    return members.member === true && members;
})

console.log(onlyMembers);
