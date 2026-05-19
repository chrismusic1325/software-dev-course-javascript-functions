/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================

function generateBadge(name, role) {

    let formattedRole =
        role.charAt(0).toUpperCase() + role.slice(1);

    return "Name: " + name + ", Role: " + formattedRole;

}

// Test cases
console.log(generateBadge("Alice", "speaker"));
console.log(generateBadge("Bob", "student"));


// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================

function calculateEventCost(attendees, costPerAttendee) {

    let totalCost = attendees * costPerAttendee;

    if (attendees > 100) {
        totalCost = totalCost * 0.9;
    }

    return totalCost;

}

// Test cases
console.log(calculateEventCost(50, 20));
console.log(calculateEventCost(150, 20));


// ============================================
// 🧩 Task 3: Validate Email
// ============================================

function validateEmail(email) {

    if (email.includes("@") && email.includes(".")) {
        return true;
    } else {
        return false;
    }

}

// Test cases
console.log(validateEmail("test@example.com"));
console.log(validateEmail("invalidemail"));