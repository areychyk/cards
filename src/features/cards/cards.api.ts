import { instance } from "common/api/common.api";



export const CardsApi={
  getCards:(data:ArgCardsType)=>{

    return instance.get<ResponseType>("/cards/card",{
      params:{
				cardsPack_id:data.cardsPack_id,
				page:data.page,
				pageCount:data.pageCount,
				cardQuestion:data.cardQuestion
      }
    })
  },
	deleteCard:(card_id:string)=>{
		return instance.delete<any>("/cards/card",{
			params:{
				id:card_id,
			}
		})
	},
	createCards:(data:ArgCreateCardType)=>{
		return instance.post<any>("/cards/card",data)
	},
	updateCards:(data:ArgUpdateCardType)=>{
		return instance.put<any>("/cards/card",data)
	},
	gradeCards:(data:ArgGradeCardType)=>{
		return instance.put<ResponseTypeUpdatedGrade>("/cards/grade",data)
	},
}


//types
export type ResponseTypeUpdatedGrade = {
	updatedGrade: UpdatedGradeType;
	token: string;
	tokenDeathTime: number;
}
export type UpdatedGradeType = {
	card_id: string;
	user_id: string;
	cardsPack_id: string;
	grade: number;
	shots: number;
	more_id: string;
	_id: string;
	created: string;
	updated: string;
	__v: number;
}



export type ArgGradeCardType={
	grade: CardGradeType
	card_id: string
}
export type ArgUpdateCardType = {
	card:{
		_id?: string;
		question?: string;
		answer?: string;
		grade?: CardGradeType;
		shots?: number;
		answerImg?: string;
		questionImg?: string;
		questionVideo?: string;
		answerVideo?: string;
	}

};


export type CardGradeType = 0 | 1 | 2 | 3 | 4 | 5;

export type ArgCreateCardType = {
	card:{
		cardsPack_id?: string;
		question?: string;
		answer?: string;
		grade?: CardGradeType;
		shots?: number;
		answerImg?: string;
		questionImg?: string;
		questionVideo?: string;
		answerVideo?: string;
	}

};

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
	user_id?: string;
	question: string;
	answer: string;
	grade: number;
	shots: number;
	comments?: string;
	type: string;
	rating: number;
	more_id: string;
	created: string;
	updated: string;
	__v?: number;
}

