import faker from '@faker-js/faker';
import { GlossaryItem } from '../../api/glossary/interfaces';

export const mockGlossaryList = (): Array<GlossaryItem> => [{
    id: faker.datatype.uuid(),
    title: faker.word.conjunction(),
    description: faker.lorem.paragraph(),
    caseSensitive: faker.datatype.boolean(),
    translatable: faker.datatype.boolean(),
    forbidden: faker.datatype.boolean(),
    createdAt: faker.date.past().toISOString(),
    createdBy: {
        id: faker.datatype.uuid(),
        fullName: faker.name.findName(),
    }
},
{
    id: faker.datatype.uuid(),
    title: faker.word.conjunction(),
    description: faker.lorem.paragraph(),
    caseSensitive: faker.datatype.boolean(),
    translatable: faker.datatype.boolean(),
    forbidden: faker.datatype.boolean(),
    createdAt: faker.date.past().toISOString(),
    createdBy: {
        id: faker.datatype.uuid(),
        fullName: faker.name.findName(),
    }
},
{
    id: faker.datatype.uuid(),
    title: faker.word.conjunction(),
    description: faker.lorem.paragraph(),
    caseSensitive: faker.datatype.boolean(),
    translatable: faker.datatype.boolean(),
    forbidden: faker.datatype.boolean(),
    createdAt: faker.date.past().toISOString(),
    createdBy: {
        id: faker.datatype.uuid(),
        fullName: faker.name.findName(),
    }
}];