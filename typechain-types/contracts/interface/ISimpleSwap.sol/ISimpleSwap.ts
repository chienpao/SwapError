/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface ISimpleSwapInterface extends utils.Interface {
  functions: {
    "addLiquidity(uint256,uint256)": FunctionFragment;
    "changeOwner(address)": FunctionFragment;
    "getReserves()": FunctionFragment;
    "getTokenA()": FunctionFragment;
    "getTokenB()": FunctionFragment;
    "removeLiquidity(uint256)": FunctionFragment;
    "swap(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addLiquidity"
      | "changeOwner"
      | "getReserves"
      | "getTokenA"
      | "getTokenB"
      | "removeLiquidity"
      | "swap"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserves",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getTokenA", values?: undefined): string;
  encodeFunctionData(functionFragment: "getTokenB", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTokenA", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTokenB", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {
    "AddLiquidity(address,uint256,uint256,uint256)": EventFragment;
    "RemoveLiquidity(address,uint256,uint256,uint256)": EventFragment;
    "Swap(address,address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
}

export interface AddLiquidityEventObject {
  sender: string;
  amountA: BigNumber;
  amountB: BigNumber;
  liquidity: BigNumber;
}
export type AddLiquidityEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  AddLiquidityEventObject
>;

export type AddLiquidityEventFilter = TypedEventFilter<AddLiquidityEvent>;

export interface RemoveLiquidityEventObject {
  sender: string;
  amountA: BigNumber;
  amountB: BigNumber;
  liquidity: BigNumber;
}
export type RemoveLiquidityEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  RemoveLiquidityEventObject
>;

export type RemoveLiquidityEventFilter = TypedEventFilter<RemoveLiquidityEvent>;

export interface SwapEventObject {
  sender: string;
  tokenIn: string;
  tokenOut: string;
  amountIn: BigNumber;
  amountOut: BigNumber;
}
export type SwapEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  SwapEventObject
>;

export type SwapEventFilter = TypedEventFilter<SwapEvent>;

export interface ISimpleSwap extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISimpleSwapInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addLiquidity(
      amountAIn: PromiseOrValue<BigNumberish>,
      amountBIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getReserves(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }
    >;

    getTokenA(
      overrides?: CallOverrides
    ): Promise<[string] & { tokenA: string }>;

    getTokenB(
      overrides?: CallOverrides
    ): Promise<[string] & { tokenB: string }>;

    removeLiquidity(
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swap(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addLiquidity(
    amountAIn: PromiseOrValue<BigNumberish>,
    amountBIn: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeOwner(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getReserves(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }
  >;

  getTokenA(overrides?: CallOverrides): Promise<string>;

  getTokenB(overrides?: CallOverrides): Promise<string>;

  removeLiquidity(
    liquidity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swap(
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    amountIn: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidity(
      amountAIn: PromiseOrValue<BigNumberish>,
      amountBIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amountA: BigNumber;
        amountB: BigNumber;
        liquidity: BigNumber;
      }
    >;

    changeOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getReserves(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }
    >;

    getTokenA(overrides?: CallOverrides): Promise<string>;

    getTokenB(overrides?: CallOverrides): Promise<string>;

    removeLiquidity(
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountA: BigNumber; amountB: BigNumber }
    >;

    swap(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "AddLiquidity(address,uint256,uint256,uint256)"(
      sender?: PromiseOrValue<string> | null,
      amountA?: null,
      amountB?: null,
      liquidity?: null
    ): AddLiquidityEventFilter;
    AddLiquidity(
      sender?: PromiseOrValue<string> | null,
      amountA?: null,
      amountB?: null,
      liquidity?: null
    ): AddLiquidityEventFilter;

    "RemoveLiquidity(address,uint256,uint256,uint256)"(
      sender?: PromiseOrValue<string> | null,
      amountA?: null,
      amountB?: null,
      liquidity?: null
    ): RemoveLiquidityEventFilter;
    RemoveLiquidity(
      sender?: PromiseOrValue<string> | null,
      amountA?: null,
      amountB?: null,
      liquidity?: null
    ): RemoveLiquidityEventFilter;

    "Swap(address,address,address,uint256,uint256)"(
      sender?: PromiseOrValue<string> | null,
      tokenIn?: PromiseOrValue<string> | null,
      tokenOut?: PromiseOrValue<string> | null,
      amountIn?: null,
      amountOut?: null
    ): SwapEventFilter;
    Swap(
      sender?: PromiseOrValue<string> | null,
      tokenIn?: PromiseOrValue<string> | null,
      tokenOut?: PromiseOrValue<string> | null,
      amountIn?: null,
      amountOut?: null
    ): SwapEventFilter;
  };

  estimateGas: {
    addLiquidity(
      amountAIn: PromiseOrValue<BigNumberish>,
      amountBIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getReserves(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenA(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenB(overrides?: CallOverrides): Promise<BigNumber>;

    removeLiquidity(
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swap(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      amountAIn: PromiseOrValue<BigNumberish>,
      amountBIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeLiquidity(
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
