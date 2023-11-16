import mongoose from "mongoose"
import type { Model, Query, } from "../../types"

class ModelHelper {

    /**
     * 
     * @param model 
     * @param data 
     * @returns {Object}
     */
    static saveData = async (model: Model, data: any ) => {
        try {
            const dataModel = new model(data)
            const saveData = await dataModel.save()

            return saveData
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param model 
     * @param query 
     * @param projection 
     * @param options 
     * @returns {Object}
     */
    static getData = async (model: Model, query?: any, projection?: any, options?: any ) => {
        try {
            const data = await model.find(query, projection, options)

            return data
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param model 
     * @param query 
     * @param projection 
     * @param options 
     * @returns {Object}
     */
    static getDataOne = async (model: Model, query: any, projection?: any, options?: any ) => {
        try {
            const data = await model.findOne(query, projection, options)

            return data
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param model 
     * @param query 
     * @param key 
     * @param projection 
     * @param options 
     * @returns {Object}
     */
    static getUniqueData = async (model: Model, query: any, key: string, projection?: any, options?: any ) => {
        try {
            const data = await model.find(query, projection, options).distinct(key)

            return data
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param model 
     * @param conditions 
     * @param update 
     * @param options 
     * @returns {Object}
     */
    static findOneAndUpdate = async (model: Model, conditions: any, update: any, options?: any) => {
        try {
            const data = await model.findOneAndUpdate(conditions, update, options)

            return data
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param model 
     * @param conditions 
     * @param options 
     * @returns {Object}
     */
    static findOneAndDelete = async (model: Model, conditions: any, options?: any) => {
        try {
            const data = await model.findOneAndDelete(conditions, options)

            return data
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param model 
     * @param conditions 
     * @param update 
     * @param populateOptions 
     * @param options 
     * @returns {Object}
     */
    static findAndUpdateWithPopulate = async (model: Model, conditions: any, update: any, populateOptions: string | string[], options?: any) => {
        try {
            const data = await model.findOneAndUpdate(conditions, update, options).populate(populateOptions)

            return data
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param model 
     * @param conditions 
     * @param update 
     * @param options 
     * @returns {Object}
     */
    static update = async (model: Model, conditions ?:any, update?: any, options?: any) => {
        try {
            const data = await model.updateMany(conditions, update, options)
            return data
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param model 
     * @param conditions 
     * @param update 
     * @param options 
     * @returns {Object}
     */
    static updateOne = async (model: Model, conditions?: any, update?: any, options?: any) => {
        try {
            const data = await model.updateOne(conditions, update, options)

            return data
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param model 
     * @param condition 
     * @returns {Object}
     */
    static remove = async (model: Model, condition?: any) => {
        try {
            const data = await model.deleteMany(condition)

            return data
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param model 
     * @param query 
     * @param projection 
     * @param options 
     * @param collectionOptions 
     * @returns {Object}
     */
    static populateData = async (model: Model, query?: any, projection?: any, options?: any, collectionOptions?: any) => {
        try {
            const data = await model.find(query, projection, options).populate(collectionOptions).exec()

            return data
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param model 
     * @param query 
     * @param projection 
     * @param options 
     * @param collectionOptions 
     * @returns {Object}
     */
    static populateOneData = async (model: Model, query?: any, projection?: any, options?: any, collectionOptions?: any) => {
        try {
            const data = await model.findOne(query, projection, options).populate(collectionOptions).exec()

            return data
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param model 
     * @param query 
     * @param projection 
     * @param options 
     * @param collectionOptions 
     * @param populateOptions 
     * @returns {Object}
     */
    static deepPopulateData = async (model: Model, query?: any, projection?: any, options?: any, collectionOptions?: any, populateOptions?: any) => {
        try {
            const data = await model.find(query, projection, options).populate(collectionOptions).exec()

            const populateData = await model.populate(data, populateOptions)

            return populateData
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param model 
     * @param condition 
     * @returns {Object}
     */
    static count = async (model: Model, condition?: any) => {
        try {
            const data = await model.countDocuments(condition)

            return data
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param model 
     * @param group 
     * @param options 
     * @returns {Object}
     */
    static aggregateData = async (model: Model, group?: any, options?: any) => {
        try {
            if(!!options) {
                const data = await model.aggregate(group).option(options)
                
                return data
            }
            else {
                const data = await model.aggregate(group)

                return data
            }
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param model 
     * @param insertData 
     * @param options 
     * @returns {Object}
     */
    static insert = async (model: Model, insertData?: any, options?: any) => {
        try {
            const data = await model.collection.insertOne(insertData, options)

            return data
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param model 
     * @param insertData 
     * @param options 
     * @returns {Object}
     */
    static insertMany = async (model: Model, insertData?: any, options?: any) => {
        try {
            const data = await model.collection.insertMany(insertData, options)

            return data
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param bulk 
     * @param query 
     * @param update 
     * @param options 
     * @returns {Object}
     */
    static bulkFindAndUpdate = async (bulk: Model, query?: any, update?: any, options?: any) => {
        try {
            const data = await bulk.updateMany(query, update, { upsert: true, ...options })

            return data
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param bulk 
     * @param query 
     * @param update 
     * @param options 
     * @returns {Object}
     */
    static bulkFindAndUpdateOne = async (bulk: Model, query?: any, update?: any, options?: any) => {
        try {
            const data = await bulk.findOneAndUpdate(query, update, { upsert: true, ...options })

            return data
        }
        catch(error) {
            throw error
        }
    }

    /**
     * 
     * @param model 
     * @param group 
     * @param populateOptions 
     * @param options 
     * @returns {Object}
     */
    static aggregateDataWithPopulate = async (model: Model, group?: any, populateOptions?: any, options?: any) => {
        try {
            let aggregateData;
            
            if(!!options) {
                aggregateData = await model.aggregate(group).option(options)
            }
            else {
                aggregateData = await model.aggregate(group)
            }

            const populateData = await model.populate(aggregateData, populateOptions)

            return populateData
        }
        catch(error) {
            throw error
        }
    }
}

export default ModelHelper