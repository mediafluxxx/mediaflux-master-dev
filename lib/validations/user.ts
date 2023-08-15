import * as z from 'zod'

export const UserValidation = z.object({
  profile_photo:  z.string().url().nonempty(),
  name:           z.string().min(3, { message: 'MIN 3 Chars'}).max(30) ,
  username:       z.string().min(3).max(30),
  bio:            z.string().min(3).max(1000),
})