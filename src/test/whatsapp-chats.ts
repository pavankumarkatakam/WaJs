import { testHelperLoadWa } from "./helper";
import store from "../store";
import { Color } from "../utils";

export default function () {
    return testHelperLoadWa().then(
        async wa => {
            // console.log(Color.b('>> UNREADS <<'));
            // const unreads = store.getUnreadChats().forEach(
            //     c => {
            //         console.log(Color.m(c.jid), Color.y(c.name))
            //         // const idx = c.messages.length - c.unread
            //         // if (idx < 0) {
            //         //     console.log(Color.r('No MSG'), idx)
            //         // } else {
            //         //     console.log(c.messages.slice(idx))
            //         // }
            //     }
            // )
            // send message
            return wa.sendTextMessage('628997026464@s.whatsapp.net', 'TEST').then(
                r => console.log('sendTextMessage', r)
            )
        }
    )
}