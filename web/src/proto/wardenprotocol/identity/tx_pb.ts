// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file wardenprotocol/identity/tx.proto (package wardenprotocol.identity, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { KeychainFees } from "./keychain_pb.js";

/**
 * @generated from message wardenprotocol.identity.MsgNewSpace
 */
export class MsgNewSpace extends Message<MsgNewSpace> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: uint64 admin_intent_id = 2;
   */
  adminIntentId = protoInt64.zero;

  /**
   * @generated from field: uint64 sign_intent_id = 3;
   */
  signIntentId = protoInt64.zero;

  /**
   * @generated from field: repeated string additional_owners = 4;
   */
  additionalOwners: string[] = [];

  constructor(data?: PartialMessage<MsgNewSpace>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgNewSpace";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "admin_intent_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "sign_intent_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "additional_owners", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNewSpace {
    return new MsgNewSpace().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNewSpace {
    return new MsgNewSpace().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNewSpace {
    return new MsgNewSpace().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNewSpace | PlainMessage<MsgNewSpace> | undefined, b: MsgNewSpace | PlainMessage<MsgNewSpace> | undefined): boolean {
    return proto3.util.equals(MsgNewSpace, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.MsgNewSpaceResponse
 */
export class MsgNewSpaceResponse extends Message<MsgNewSpaceResponse> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  constructor(data?: PartialMessage<MsgNewSpaceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgNewSpaceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNewSpaceResponse {
    return new MsgNewSpaceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNewSpaceResponse {
    return new MsgNewSpaceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNewSpaceResponse {
    return new MsgNewSpaceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNewSpaceResponse | PlainMessage<MsgNewSpaceResponse> | undefined, b: MsgNewSpaceResponse | PlainMessage<MsgNewSpaceResponse> | undefined): boolean {
    return proto3.util.equals(MsgNewSpaceResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.MsgAddSpaceOwner
 */
export class MsgAddSpaceOwner extends Message<MsgAddSpaceOwner> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string space_addr = 2;
   */
  spaceAddr = "";

  /**
   * @generated from field: string new_owner = 3;
   */
  newOwner = "";

  /**
   * @generated from field: uint64 btl = 4;
   */
  btl = protoInt64.zero;

  constructor(data?: PartialMessage<MsgAddSpaceOwner>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgAddSpaceOwner";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "space_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "new_owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "btl", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddSpaceOwner {
    return new MsgAddSpaceOwner().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddSpaceOwner {
    return new MsgAddSpaceOwner().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddSpaceOwner {
    return new MsgAddSpaceOwner().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAddSpaceOwner | PlainMessage<MsgAddSpaceOwner> | undefined, b: MsgAddSpaceOwner | PlainMessage<MsgAddSpaceOwner> | undefined): boolean {
    return proto3.util.equals(MsgAddSpaceOwner, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.MsgAddSpaceOwnerResponse
 */
export class MsgAddSpaceOwnerResponse extends Message<MsgAddSpaceOwnerResponse> {
  constructor(data?: PartialMessage<MsgAddSpaceOwnerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgAddSpaceOwnerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddSpaceOwnerResponse {
    return new MsgAddSpaceOwnerResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddSpaceOwnerResponse {
    return new MsgAddSpaceOwnerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddSpaceOwnerResponse {
    return new MsgAddSpaceOwnerResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAddSpaceOwnerResponse | PlainMessage<MsgAddSpaceOwnerResponse> | undefined, b: MsgAddSpaceOwnerResponse | PlainMessage<MsgAddSpaceOwnerResponse> | undefined): boolean {
    return proto3.util.equals(MsgAddSpaceOwnerResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.MsgRemoveSpaceOwner
 */
export class MsgRemoveSpaceOwner extends Message<MsgRemoveSpaceOwner> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string space_addr = 2;
   */
  spaceAddr = "";

  /**
   * @generated from field: string owner = 3;
   */
  owner = "";

  /**
   * @generated from field: uint64 btl = 4;
   */
  btl = protoInt64.zero;

  constructor(data?: PartialMessage<MsgRemoveSpaceOwner>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgRemoveSpaceOwner";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "space_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "btl", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRemoveSpaceOwner {
    return new MsgRemoveSpaceOwner().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRemoveSpaceOwner {
    return new MsgRemoveSpaceOwner().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRemoveSpaceOwner {
    return new MsgRemoveSpaceOwner().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRemoveSpaceOwner | PlainMessage<MsgRemoveSpaceOwner> | undefined, b: MsgRemoveSpaceOwner | PlainMessage<MsgRemoveSpaceOwner> | undefined): boolean {
    return proto3.util.equals(MsgRemoveSpaceOwner, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.MsgRemoveSpaceOwnerResponse
 */
export class MsgRemoveSpaceOwnerResponse extends Message<MsgRemoveSpaceOwnerResponse> {
  constructor(data?: PartialMessage<MsgRemoveSpaceOwnerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgRemoveSpaceOwnerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRemoveSpaceOwnerResponse {
    return new MsgRemoveSpaceOwnerResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRemoveSpaceOwnerResponse {
    return new MsgRemoveSpaceOwnerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRemoveSpaceOwnerResponse {
    return new MsgRemoveSpaceOwnerResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRemoveSpaceOwnerResponse | PlainMessage<MsgRemoveSpaceOwnerResponse> | undefined, b: MsgRemoveSpaceOwnerResponse | PlainMessage<MsgRemoveSpaceOwnerResponse> | undefined): boolean {
    return proto3.util.equals(MsgRemoveSpaceOwnerResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.MsgNewKeychain
 */
export class MsgNewKeychain extends Message<MsgNewKeychain> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: uint64 admin_intent_id = 3;
   */
  adminIntentId = protoInt64.zero;

  /**
   * @generated from field: wardenprotocol.identity.KeychainFees fees = 4;
   */
  fees?: KeychainFees;

  constructor(data?: PartialMessage<MsgNewKeychain>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgNewKeychain";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "admin_intent_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "fees", kind: "message", T: KeychainFees },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNewKeychain {
    return new MsgNewKeychain().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNewKeychain {
    return new MsgNewKeychain().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNewKeychain {
    return new MsgNewKeychain().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNewKeychain | PlainMessage<MsgNewKeychain> | undefined, b: MsgNewKeychain | PlainMessage<MsgNewKeychain> | undefined): boolean {
    return proto3.util.equals(MsgNewKeychain, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.MsgNewKeychainResponse
 */
export class MsgNewKeychainResponse extends Message<MsgNewKeychainResponse> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  constructor(data?: PartialMessage<MsgNewKeychainResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgNewKeychainResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNewKeychainResponse {
    return new MsgNewKeychainResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNewKeychainResponse {
    return new MsgNewKeychainResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNewKeychainResponse {
    return new MsgNewKeychainResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNewKeychainResponse | PlainMessage<MsgNewKeychainResponse> | undefined, b: MsgNewKeychainResponse | PlainMessage<MsgNewKeychainResponse> | undefined): boolean {
    return proto3.util.equals(MsgNewKeychainResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.MsgAddKeychainParty
 */
export class MsgAddKeychainParty extends Message<MsgAddKeychainParty> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string keychain_addr = 2;
   */
  keychainAddr = "";

  /**
   * @generated from field: string party = 3;
   */
  party = "";

  constructor(data?: PartialMessage<MsgAddKeychainParty>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgAddKeychainParty";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "keychain_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "party", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddKeychainParty {
    return new MsgAddKeychainParty().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddKeychainParty {
    return new MsgAddKeychainParty().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddKeychainParty {
    return new MsgAddKeychainParty().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAddKeychainParty | PlainMessage<MsgAddKeychainParty> | undefined, b: MsgAddKeychainParty | PlainMessage<MsgAddKeychainParty> | undefined): boolean {
    return proto3.util.equals(MsgAddKeychainParty, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.MsgAddKeychainPartyResponse
 */
export class MsgAddKeychainPartyResponse extends Message<MsgAddKeychainPartyResponse> {
  constructor(data?: PartialMessage<MsgAddKeychainPartyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgAddKeychainPartyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddKeychainPartyResponse {
    return new MsgAddKeychainPartyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddKeychainPartyResponse {
    return new MsgAddKeychainPartyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddKeychainPartyResponse {
    return new MsgAddKeychainPartyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAddKeychainPartyResponse | PlainMessage<MsgAddKeychainPartyResponse> | undefined, b: MsgAddKeychainPartyResponse | PlainMessage<MsgAddKeychainPartyResponse> | undefined): boolean {
    return proto3.util.equals(MsgAddKeychainPartyResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.MsgAppendChildSpace
 */
export class MsgAppendChildSpace extends Message<MsgAppendChildSpace> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string parent_space_addr = 2;
   */
  parentSpaceAddr = "";

  /**
   * @generated from field: string child_space_addr = 3;
   */
  childSpaceAddr = "";

  /**
   * @generated from field: uint64 btl = 4;
   */
  btl = protoInt64.zero;

  constructor(data?: PartialMessage<MsgAppendChildSpace>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgAppendChildSpace";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "parent_space_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "child_space_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "btl", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAppendChildSpace {
    return new MsgAppendChildSpace().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAppendChildSpace {
    return new MsgAppendChildSpace().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAppendChildSpace {
    return new MsgAppendChildSpace().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAppendChildSpace | PlainMessage<MsgAppendChildSpace> | undefined, b: MsgAppendChildSpace | PlainMessage<MsgAppendChildSpace> | undefined): boolean {
    return proto3.util.equals(MsgAppendChildSpace, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.MsgAppendChildSpaceResponse
 */
export class MsgAppendChildSpaceResponse extends Message<MsgAppendChildSpaceResponse> {
  constructor(data?: PartialMessage<MsgAppendChildSpaceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgAppendChildSpaceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAppendChildSpaceResponse {
    return new MsgAppendChildSpaceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAppendChildSpaceResponse {
    return new MsgAppendChildSpaceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAppendChildSpaceResponse {
    return new MsgAppendChildSpaceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAppendChildSpaceResponse | PlainMessage<MsgAppendChildSpaceResponse> | undefined, b: MsgAppendChildSpaceResponse | PlainMessage<MsgAppendChildSpaceResponse> | undefined): boolean {
    return proto3.util.equals(MsgAppendChildSpaceResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.MsgNewChildSpace
 */
export class MsgNewChildSpace extends Message<MsgNewChildSpace> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string parent_space_addr = 2;
   */
  parentSpaceAddr = "";

  /**
   * @generated from field: uint64 btl = 3;
   */
  btl = protoInt64.zero;

  constructor(data?: PartialMessage<MsgNewChildSpace>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgNewChildSpace";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "parent_space_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "btl", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNewChildSpace {
    return new MsgNewChildSpace().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNewChildSpace {
    return new MsgNewChildSpace().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNewChildSpace {
    return new MsgNewChildSpace().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNewChildSpace | PlainMessage<MsgNewChildSpace> | undefined, b: MsgNewChildSpace | PlainMessage<MsgNewChildSpace> | undefined): boolean {
    return proto3.util.equals(MsgNewChildSpace, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.MsgNewChildSpaceResponse
 */
export class MsgNewChildSpaceResponse extends Message<MsgNewChildSpaceResponse> {
  constructor(data?: PartialMessage<MsgNewChildSpaceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgNewChildSpaceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNewChildSpaceResponse {
    return new MsgNewChildSpaceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNewChildSpaceResponse {
    return new MsgNewChildSpaceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNewChildSpaceResponse {
    return new MsgNewChildSpaceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNewChildSpaceResponse | PlainMessage<MsgNewChildSpaceResponse> | undefined, b: MsgNewChildSpaceResponse | PlainMessage<MsgNewChildSpaceResponse> | undefined): boolean {
    return proto3.util.equals(MsgNewChildSpaceResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.MsgUpdateSpace
 */
export class MsgUpdateSpace extends Message<MsgUpdateSpace> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string space_addr = 2;
   */
  spaceAddr = "";

  /**
   * @generated from field: uint64 admin_intent_id = 3;
   */
  adminIntentId = protoInt64.zero;

  /**
   * @generated from field: uint64 sign_intent_id = 4;
   */
  signIntentId = protoInt64.zero;

  /**
   * @generated from field: uint64 btl = 5;
   */
  btl = protoInt64.zero;

  constructor(data?: PartialMessage<MsgUpdateSpace>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgUpdateSpace";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "space_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "admin_intent_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "sign_intent_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "btl", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateSpace {
    return new MsgUpdateSpace().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateSpace {
    return new MsgUpdateSpace().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateSpace {
    return new MsgUpdateSpace().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateSpace | PlainMessage<MsgUpdateSpace> | undefined, b: MsgUpdateSpace | PlainMessage<MsgUpdateSpace> | undefined): boolean {
    return proto3.util.equals(MsgUpdateSpace, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.MsgUpdateSpaceResponse
 */
export class MsgUpdateSpaceResponse extends Message<MsgUpdateSpaceResponse> {
  constructor(data?: PartialMessage<MsgUpdateSpaceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgUpdateSpaceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateSpaceResponse {
    return new MsgUpdateSpaceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateSpaceResponse {
    return new MsgUpdateSpaceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateSpaceResponse {
    return new MsgUpdateSpaceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateSpaceResponse | PlainMessage<MsgUpdateSpaceResponse> | undefined, b: MsgUpdateSpaceResponse | PlainMessage<MsgUpdateSpaceResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateSpaceResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.MsgUpdateKeychain
 */
export class MsgUpdateKeychain extends Message<MsgUpdateKeychain> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string keychain_addr = 2;
   */
  keychainAddr = "";

  /**
   * @generated from field: string description = 3;
   */
  description = "";

  /**
   * @generated from field: bool is_active = 4;
   */
  isActive = false;

  constructor(data?: PartialMessage<MsgUpdateKeychain>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgUpdateKeychain";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "keychain_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateKeychain {
    return new MsgUpdateKeychain().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateKeychain {
    return new MsgUpdateKeychain().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateKeychain {
    return new MsgUpdateKeychain().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateKeychain | PlainMessage<MsgUpdateKeychain> | undefined, b: MsgUpdateKeychain | PlainMessage<MsgUpdateKeychain> | undefined): boolean {
    return proto3.util.equals(MsgUpdateKeychain, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.MsgUpdateKeychainResponse
 */
export class MsgUpdateKeychainResponse extends Message<MsgUpdateKeychainResponse> {
  constructor(data?: PartialMessage<MsgUpdateKeychainResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.MsgUpdateKeychainResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateKeychainResponse {
    return new MsgUpdateKeychainResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateKeychainResponse {
    return new MsgUpdateKeychainResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateKeychainResponse {
    return new MsgUpdateKeychainResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateKeychainResponse | PlainMessage<MsgUpdateKeychainResponse> | undefined, b: MsgUpdateKeychainResponse | PlainMessage<MsgUpdateKeychainResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateKeychainResponse, a, b);
  }
}
