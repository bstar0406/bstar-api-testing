import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

const TestSchema = new Schema(
  {
    Title: {
      type: String,
      required: true,
      trim: true,
    },
    Type: {
      type: String,
      required: true,
    },
    Year: {
      type: String,
      required: true,
      trim: true,
    },
    imdbID: {
      type: String,
      required: true,
      trim: true,
    },
    Poster: {
      type: String,
      required: true,
      trim: true,
    },
    from: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    useNestedStrict: true,
  },
)

export default mongoose.model('Test', TestSchema)
