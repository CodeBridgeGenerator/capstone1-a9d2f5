
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
id: faker.lorem.sentence(""),
categoryid: faker.lorem.sentence(""),
points: faker.lorem.sentence(""),
termsandcondition: faker.lorem.sentence("8"),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
