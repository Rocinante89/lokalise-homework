import { determineBadgeColour } from './determineBadgeColour';

describe('determineBadgeColour', () => {
    it('should return the correct string', () => {
        const redColourString = determineBadgeColour('red');
        const blueColourString = determineBadgeColour('blue');
        const grayColourString = determineBadgeColour('gray');

        expect(blueColourString).toEqual('bg-blue-500');
        expect(redColourString).toEqual('bg-red-500');
        expect(grayColourString).toEqual('bg-gray-500');
    });
});