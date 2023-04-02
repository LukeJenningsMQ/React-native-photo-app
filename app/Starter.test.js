import React from 'react';
import TestRenderer from 'react-test-renderer';
import AppText from './components/AppText.js';
import MemoriesScreen from './Screens/MemoriesScreen.js';
test("trivaily true", () => {
    expect(1).toBe(1);
});
test("AppText will render", () => {

    const json = TestRenderer.create(<AppText/>).toJSON();
});


let findElement = function(tree, element){
    let result = true;
    for(node in tree.children){
        if(tree.children[node].type == element){
            result = false;
            //If the test finds an appcard with a new user, then it should fail the test
        }
    }
    //if an appcard was not found then, the test will pass
    return result;
}

test('No memories when new user opens collections screen', () => {
    let tree = render.create(<MemoriesScreen/>).toJSON();
    expect(findElement(tree, 'AppCard')).toBe(true);
});