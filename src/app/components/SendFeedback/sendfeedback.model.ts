export interface ISendFeedback {
    id?: string ,
    user_sender?: string ,
    user_receiver: string ,
    feedback_date?: Date,
    points_improve:string ,
    points_keep: string ,
    final_feedback: string,
}