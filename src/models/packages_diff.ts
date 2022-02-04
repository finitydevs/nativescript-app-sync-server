import { Optional, DataTypes, ModelDefined } from "sequelize";
import { sequelize } from "../db";

interface PackagesDiffAttributes {
  id: number;
  package_id: number;
  diff_against_package_hash: string;
  diff_blob_url: string;
  diff_size: number;
  created_at?: Date;
  updated_at?: Date;
}

interface PackagesDiffCreationAttributes extends Optional<PackagesDiffAttributes, "id"> { }

const PackagesDiffModel: ModelDefined<
  PackagesDiffAttributes,
  PackagesDiffCreationAttributes
> = sequelize.define(
  "PackagesDiff",
  {
    id: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    package_id: DataTypes.INTEGER({ length: 11 }),
    diff_against_package_hash: DataTypes.STRING(64),
    diff_blob_url: DataTypes.STRING(255),
    diff_size: DataTypes.INTEGER({ length: 11 }),
    created_at: DataTypes.DATE(),
    updated_at: DataTypes.DATE(),
  }, {
  tableName: 'packages_diff',
  underscored: true,
  paranoid: true
});
export default PackagesDiffModel