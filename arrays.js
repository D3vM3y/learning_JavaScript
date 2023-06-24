const allClients = [];
const members = [];
const potentialMembers = [];


const client = {
    name: "Jack",
    age: 21,
    member: true,
}

allClients.push(client);
allClients.push({name: "Henry", age: 34, member: false});
allClients.push({name: "Sarah", age: 25, member: true});

// map
const isMember = allClients.map((memberDetail) => {
    let member = memberDetail.member === true && memberDetail;
    return member;
})

const interestedClient = allClients.map((memberDetail) => {
    let potentialMember = memberDetail.member === false && memberDetail;
    return potentialMember;
})
// filter
// reduce

// pushing data to the arrays

console.log();
