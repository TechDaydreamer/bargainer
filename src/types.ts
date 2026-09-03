export type ItemStatus = 'listed' | 'reserved' | 'sold';
export type OfferAction = 'accept' | 'reject' | 'counter';
export type NegotiationState = 'inquiry' | 'offer' | 'countered' | 'accepted' | 'pending_approval' | 'approved' | 'rejected' | 'walked';
export interface Item { id:string; title:string; category:string; ask:number; condition:string; status:ItemStatus; emoji:string; color:string; }
export interface Offer { id:string; personaId:string; persona:string; items:string[]; amount:number; round:number; expiresAt?:number; status:'open'|'countered'|'accepted'|'rejected'|'expired'|'walked'; state:NegotiationState; createdAt:number; }
export interface FeedEvent { id:string; type:'message'|'offer'|'system'|'deal'; persona?:string; text:string; amount?:number; timestamp:number; offerId?:string; }
export interface PendingDeal { id:string; offerId:string; persona:string; itemIds:string[]; amount:number; createdAt:number; }
export interface Bundle { id:string; itemIds:string[]; discountPercent:number; price:number; }
export interface Analytics { projectedMonthly:number; avgDiscount:number; openOffers:number; dealsWon:number; dealsLost:number; repriceCandidates:string[]; }
