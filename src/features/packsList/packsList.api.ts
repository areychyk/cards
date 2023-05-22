import { instance, instanceForSetNewPassword } from "common/api/common.api";


export const PacksListApi={
  getPacks:(data:ArgPacksListType)=>{
    return instanceForSetNewPassword.get<PacksListResponseType>("/cards/pack", { params:{
				user_id:data.user_id,
				min:data.min,
				max:data.max,
				packName:data.packName,
				page:data.page,
				pageCount:data.pageCount

			} })
  }
}





export type PacksListResponseType = {
	cardPacks: CardPacksType[];
	page: number;
	pageCount: number;
	cardPacksTotalCount: number;
	minCardsCount: number;
	maxCardsCount: number;
	token: string;
	tokenDeathTime: number;
}
export type CardPacksType = {
	_id: string;
	user_id: string;
	user_name: string;
	private: boolean;
	name: string;
	path: string;
	grade: number;
	shots: number;
	deckCover: string;
	cardsCount: number;
	type: string;
	rating: number;
	created: string;
	updated: string;
	more_id: string;
	__v: number;
}


export type ArgPacksListType={
  packName?:string
  min?:number
  max?:number
  sortPacks?:string
  page?:number
  pageCount?:number
  user_id?:string
  block?:boolean


}