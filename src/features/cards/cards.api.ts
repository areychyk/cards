import { baseURL, instance } from "common/api/common.api";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


export const CardsApi={
  getCards:(data:ArgCardsType)=>{

    return instance.get<ResponseType>("/cards/card",{
      params:{
				cardsPack_id:data.cardsPack_id
      }
    })
  }
}

// export const cardsApi = createApi({
// 	reducerPath:"cardsApi",
// 	baseQuery:fetchBaseQuery({baseUrl:baseURL}),
// 	endpoints:(build)=>{
// 		return{
// 			getCards:build.query<ResponseType,ArgCardsType>({
// 				query:(data)=>{
// 					return{
// 						method:'GET',
// 						url:'/cards/card',
// 						params:{
// 							cardsPack_id:data.cardsPack_id
// 						}
// 					}
// 				}
// 			})
//
// 		}
// }
// })
//
//
// export const {}= cardsApi


export type ArgCardsType={
  cardAnswer?:string
  cardQuestion?:string
  cardsPack_id?:string
  min?:number
  max?:number
  sortCards?:string
  page?:number
  pageCount?:number
}

export type ResponseType = {
	cards: ResponseTypeCards[];
	packUserId: string;
	packName: string;
	packPrivate: boolean;
	packCreated: string;
	packUpdated: string;
	page: number;
	pageCount: number;
	cardsTotalCount: number;
	minGrade: number;
	maxGrade: number;
	token: string;
	tokenDeathTime: number;
}
export type ResponseTypeCards = {
	_id: string;
	cardsPack_id: string;
	user_id: string;
	question: string;
	answer: string;
	grade: number;
	shots: number;
	comments: string;
	type: string;
	rating: number;
	more_id: string;
	created: string;
	updated: string;
	__v: number;
}