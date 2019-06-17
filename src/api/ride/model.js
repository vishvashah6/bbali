import mongoose, {Schema} from 'mongoose'

const rideSchema = new Schema({
  userId: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  vehicleId: {
    type: Schema.ObjectId,
    ref: 'Vehicle',
    required: true
  },
  timeStarted: {
    type: Date
  },
  type: {
    type: String,
    required: true
  },
  duration: {
    type: String
  },
  ratePerUnitTime: {
    type: String
  },
  currency: {
    type: String,
    required: true,
    default: "KWD"
  },
  timeEnded: {
    type: Date
  },
  paymentMethodId: {
    type: String,
    required: true
  },
  status: {
    type: String
  },
  rideTotal: {
    type: String
  },
  locationPickupLon: {
    type: String
  },
  locationPickupLat: {
    type: String
  },
  locationdropOffLon: {
    type: String
  },
  locationDropoffLat: {
    type: String
  },
  loctionDropoffAddress: {
    type: String
  },
  fromShop: {
    type: Boolean,
    required: true
  },
  deductCredits: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => {
      delete ret._id
    }
  }
})

rideSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      userId: this.userId,
      timeStarted: this.timeStarted,
      type: this.type,
      duration: this.duration,
      deductCredits: this.deductCredits,
      ratePerUnitTime: this.ratePerUnitTime,
      currency: this.currency,
      timeEnded: this.timeEnded,
      paymentMethodID: this.paymentMethodID,
      status: this.status,
      rideTotal: this.rideTotal,
      locationPickupLon: this.locationPickupLon,
      locationPickupLat: this.locationPickupLat,
      locationdropOffLon: this.locationdropOffLon,
      locationDropoffLat: this.locationDropoffLat,
      loctionDropoffAddress: this.loctionDropoffAddress,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  },

  allRide (full1) {
    const view1 = {
      id: this.id,
      rideId: this.rideId,
      duration: this.duration,
      paymentMethodId: this.paymentMethodId,
      paymentIdentifier: this.paymentIdentifier,
      costOfRide: this.rideTotalAmount,
      currency: this.currency,
      paymentStatus: this.paymentStatus,
      vehicleName: this.vehicleId,
      timstamp: this.timstamp,
      status: this.status,
      dropOfAddress: this.loctionDropoffAddress,
      pickupLat: this.locationPickupLat,
      pickupLon: this.locationPickupLon,
      dropOffLat: this.locationdropOffLat,
      dropoffLon: this.locationdropOffLon
    }

    return full1 ? {
      ...view1
      // add properties for a full view
    } : view1
  }
}

const model = mongoose.model('Ride', rideSchema)

export const rSchema = model.schema
export default model
