import { rest } from "msw"

const baseURL = 'https://drf-api-antony-c121376a2219.herokuapp.com/'

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            "pk": 6,
            "username": "Chris",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 6,
            "profile_image": "https://res.cloudinary.com/dqphba816/image/upload/v1/media/../default_profile_u2l8a2"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];