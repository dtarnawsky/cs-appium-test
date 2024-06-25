import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/home.page'



describe('Home', () => {


    // it('Profile Page should be visible', async () => {
    //     await $('#profileBtn').click();
    //     expect($('#title')).toHaveText('Profile');
    // });

    it('Volume should be 75', async () => {
        await HomePage.open()
        await browser.execute('document.getElementById("volumeRange").value = 75');
        (await $('#volumeRange')).click();
        const val = await $('#volumeRange').getValue();
        console.log(val);
        await $('#testBtn').click();
        expect(val).toEqual(75);
    });

});
